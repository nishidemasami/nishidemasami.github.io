---
title: Next.jsでSSG時にRemarkでPlantUMLで書いたAWSのアーキテクチャ図をSVGとして出力する
date: "2023-03-04T23:04:03+0900"
template: "post"
draft: false
category: "blog"
description: Next.jsでSSG時にRemarkでPlantUMLで書いたAWSのアーキテクチャ図をSVGにして出力してみたいと思うこと、ありますよね。僕はあるのですがネット上にあまり情報が無かったので自分用にメモです。
tags:
  - "PlantUML"
  - "Markdown"
  - "Next.js"
  - "SSG"
  - "SVG"
  - "Remark"
  - "GitHub Actions"
---

Next.jsでSSG時にRemarkでPlantUMLで書いたAWSのアーキテクチャ図をSVGにして出力してみたいと思うこと、ありますよね。  
僕はあるのですがネット上にあまり情報が無かったので自分用にメモです。

今回は`remark-sync-plantuml`を使って実装しました。

このサイトではMarkdownを`unified`で扱っているので`remark-sync-plantuml`を`use`します。  
`remark-sync-plantuml`はjavaでplantuml.jarを使ってMermaidをSVGにしているらしく、このサイトはGitHub Actionsでビルドしているので問題なく動かせそうなので採用しました。

```typescript
import rehypeShiki from '@leafac/rehype-shiki';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkPlantUML from 'remark-sync-plantuml';
import { getHighlighter } from 'shiki';
import { unified } from 'unified';

export const markdownToHtml = async (markdown: string) =>
	(
		await unified()
			.use(remarkParse)
			.use(remarkMath)
			.use(remarkGfm)
			.use(remarkMermaid, {
				launchOptions: {
					executablePath:
						process.env.GoogleChromeExecutablePath ??
						'/opt/google/chrome/google-chrome',
				},
				svgo: false,
			})
			.use(remarkPlantUML)
			.use(remarkRehype, {
				allowDangerousHtml: true,
				footnoteLabel: '脚注',
			})
			.use(rehypeShiki, {
				highlighter: await getHighlighter({
					theme: 'github-light',
				}),
			})
			.use(rehypeKatex)
			.use(rehypeStringify, { allowDangerousHtml: true })
			.process(markdown)
	)
		.toString();

```

以下にサンプルを置いておきます。図がSVGになっていることがわかると思います。

## AWS Architecture Diagrams

AWSが<https://github.com/awslabs/aws-icons-for-plantuml>で公開しているAWS Icons for PlantUMLも使うことができます。  
これなら簡単にAWSのアーキテクチャ図を書くことができて便利です。

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
skinparam defaultFontName Noto Sans CJK JP Black Regular

'Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
'SPDX-License-Identifier: MIT (For details, see https://github.com/awslabs/aws-icons-for-plantuml/blob/master/LICENSE)

!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/v15.0/dist

!include AWSPuml/AWSCommon.puml
!include AWSPuml/AWSExperimental.puml
!include AWSPuml/Groups/all.puml
!include AWSPuml/Compute/LambdaLambdaFunction.puml
!include AWSPuml/General/Documents.puml
!include AWSPuml/General/Multimedia.puml
!include AWSPuml/General/Tapestorage.puml
!include AWSPuml/General/User.puml
!include AWSPuml/MediaServices/ElementalMediaConvert.puml
!include AWSPuml/MachineLearning/Transcribe.puml
!include AWSPuml/Storage/SimpleStorageService.puml

' define custom group for Amazon S3 bucket
AWSGroupColoring(S3BucketGroup, #FFFFFF, AWS_COLOR_GREEN, plain)
!define S3BucketGroup(g_alias, g_label="Amazon S3 bucket") AWSGroupEntity(g_alias, g_label, AWS_COLOR_GREEN, SimpleStorageService, S3BucketGroup)

' Groups are rectangles with a custom style using stereotype - need to hide
hide stereotype
skinparam linetype ortho
skinparam rectangle {
		BackgroundColor AWS_BG_COLOR
		BorderColor transparent
}
'skinparam handwritten true
sprite Callout_1 <svg width="18" height="18"><circle cx="9" cy="9" r="9" fill="black" /><text x="5" y="13" fill="#FFFFFF" font-size="12">1</text></svg>

rectangle "$UserIMG()\nユーザー" as user
AWSCloudGroup(cloud){
	RegionGroup(region) {
		S3BucketGroup(s3) {
			rectangle "$MultimediaIMG()\n\t動画\t" as video
			rectangle "$TapestorageIMG()\n\t音声\t" as audio
			rectangle "$DocumentsIMG()\n\tテキスト\t" as transcript

			user -r-> video: <$Callout_1>\lアップロード
			video -r-> audio
			audio -r-> transcript
		}

		rectangle "$LambdaLambdaFunctionIMG()\nObjectCreated\nevent handler" as e1
		rectangle "$ElementalMediaConvertIMG()\nAWS Elemental\nMediaConvert" as mediaconvert
		rectangle "$TranscribeIMG()\nAmazon Transcribe\n" as transcribe

		video -d-> e1: <$Callout_2>
		e1 -[hidden]r-> mediaconvert
		mediaconvert -[hidden]r-> transcribe
		mediaconvert -u-> audio: <$Callout_3>
		transcribe -u-> transcript: <$Callout_4>

		StepFunctionsWorkflowGroup(sfw) {
			rectangle "$LambdaLambdaFunctionIMG()\nextract audio" as sfw1
			rectangle "$LambdaLambdaFunctionIMG()\ntranscribe audio" as sfw2

			e1 -r-> sfw1: 起動
			sfw1 -r-> sfw2
			sfw1 -u-> mediaconvert
			sfw2 -u-> transcribe
		}
	}
}
@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
skinparam defaultFontName Noto Sans CJK JP Black Regular

'Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
'SPDX-License-Identifier: MIT (For details, see https://github.com/awslabs/aws-icons-for-plantuml/blob/master/LICENSE)

!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/v15.0/dist

!include AWSPuml/AWSCommon.puml
!include AWSPuml/AWSExperimental.puml
!include AWSPuml/Groups/all.puml
!include AWSPuml/Compute/LambdaLambdaFunction.puml
!include AWSPuml/General/Documents.puml
!include AWSPuml/General/Multimedia.puml
!include AWSPuml/General/Tapestorage.puml
!include AWSPuml/General/User.puml
!include AWSPuml/MediaServices/ElementalMediaConvert.puml
!include AWSPuml/MachineLearning/Transcribe.puml
!include AWSPuml/Storage/SimpleStorageService.puml

' define custom group for Amazon S3 bucket
AWSGroupColoring(S3BucketGroup, #FFFFFF, AWS_COLOR_GREEN, plain)
!define S3BucketGroup(g_alias, g_label="Amazon S3 bucket") AWSGroupEntity(g_alias, g_label, AWS_COLOR_GREEN, SimpleStorageService, S3BucketGroup)

' Groups are rectangles with a custom style using stereotype - need to hide
hide stereotype
skinparam linetype ortho
skinparam rectangle {
		BackgroundColor AWS_BG_COLOR
		BorderColor transparent
}
'skinparam handwritten true
sprite Callout_1 <svg width="18" height="18"><circle cx="9" cy="9" r="9" fill="black" /><text x="5" y="13" fill="#FFFFFF" font-size="12">1</text></svg>

rectangle "$UserIMG()\nユーザー" as user
AWSCloudGroup(cloud){
	RegionGroup(region) {
		S3BucketGroup(s3) {
			rectangle "$MultimediaIMG()\n\t動画\t" as video
			rectangle "$TapestorageIMG()\n\t音声\t" as audio
			rectangle "$DocumentsIMG()\n\tテキスト\t" as transcript

			user -r-> video: <$Callout_1>\lアップロード
			video -r-> audio
			audio -r-> transcript
		}

		rectangle "$LambdaLambdaFunctionIMG()\nObjectCreated\nevent handler" as e1
		rectangle "$ElementalMediaConvertIMG()\nAWS Elemental\nMediaConvert" as mediaconvert
		rectangle "$TranscribeIMG()\nAmazon Transcribe\n" as transcribe

		video -d-> e1: <$Callout_2>
		e1 -[hidden]r-> mediaconvert
		mediaconvert -[hidden]r-> transcribe
		mediaconvert -u-> audio: <$Callout_3>
		transcribe -u-> transcript: <$Callout_4>

		StepFunctionsWorkflowGroup(sfw) {
			rectangle "$LambdaLambdaFunctionIMG()\nextract audio" as sfw1
			rectangle "$LambdaLambdaFunctionIMG()\ntranscribe audio" as sfw2

			e1 -r-> sfw1: 起動
			sfw1 -r-> sfw2
			sfw1 -u-> mediaconvert
			sfw2 -u-> transcribe
		}
	}
}
@enduml
```

## 他のUML図

PlantUMLで書ける他のUML図の例も紹介しておきます。

### シーケンス図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
participant User

User -> A: DoWork
activate A #FFBBBB

A -> A: Internal call
activate A #DarkSalmon

A -> B: << createRequest >>
activate B

B --> A: RequestCreated
deactivate B
deactivate A
A -> User: Done
deactivate A

@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
participant User

User -> A: DoWork
activate A #FFBBBB

A -> A: Internal call
activate A #DarkSalmon

A -> B: << createRequest >>
activate B

B --> A: RequestCreated
deactivate B
deactivate A
A -> User: Done
deactivate A

@enduml
```

### ユースケース図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
User -> (Start)
User --> (Use the application) : A small label

:Main Admin: ---> (Use the application) : This is\nyet another\nlabel

@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
User -> (Start)
User --> (Use the application) : A small label

:Main Admin: ---> (Use the application) : This is\nyet another\nlabel

@enduml
```

### クラス図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
class Student {
  Name
}
Student "0..*" - "1..*" Course
(Student, Course) .. Enrollment

class Enrollment {
  drop()
  cancel()
}
@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
class Student {
  Name
}
Student "0..*" - "1..*" Course
(Student, Course) .. Enrollment

class Enrollment {
  drop()
  cancel()
}
@enduml
```

### アクティビティ図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
start
repeat
  :Test something;
    if (Something went wrong?) then (no)
      #palegreen:OK;
      break
    endif
    ->NOK;
    :Alert "Error with long text";
repeat while (Something went wrong with long text?) is (yes) not (no)
->//merged step//;
:Alert "Success";
stop
@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
start
repeat
  :Test something;
    if (Something went wrong?) then (no)
      #palegreen:OK;
      break
    endif
    ->NOK;
    :Alert "Error with long text";
repeat while (Something went wrong with long text?) is (yes) not (no)
->//merged step//;
:Alert "Success";
stop
@enduml
```

### コンポーネント図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```

### マインドマップ図

````markdown
```plantuml
@startmindmap
skinparam svgDimensionStyle false
+ root node
++ some first level node
+++_ second level node
+++_ another second level node
+++_ foo
+++_ bar
+++_ foobar
++_ another first level node
-- some first right level node
--_ another first right level node
@endmindmap
```
````

```plantuml
@startmindmap
skinparam svgDimensionStyle false
+ root node
++ some first level node
+++_ second level node
+++_ another second level node
+++_ foo
+++_ bar
+++_ foobar
++_ another first level node
-- some first right level node
--_ another first right level node
@endmindmap
```

### 状態図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
scale 600 width

[*] -> State1
State1 --> State2 : Succeeded
State1 --> [*] : Aborted
State2 --> State3 : Succeeded
State2 --> [*] : Aborted
state State3 {
  state "Accumulate Enough Data\nLong State Name" as long1
  long1 : Just a test
  [*] --> long1
  long1 --> long1 : New Data
  long1 --> ProcessData : Enough Data
}
State3 --> State3 : Failed
State3 --> [*] : Succeeded / Save Result
State3 --> [*] : Aborted

@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
scale 600 width

[*] -> State1
State1 --> State2 : Succeeded
State1 --> [*] : Aborted
State2 --> State3 : Succeeded
State2 --> [*] : Aborted
state State3 {
  state "Accumulate Enough Data\nLong State Name" as long1
  long1 : Just a test
  [*] --> long1
  long1 --> long1 : New Data
  long1 --> ProcessData : Enough Data
}
State3 --> State3 : Failed
State3 --> [*] : Succeeded / Save Result
State3 --> [*] : Aborted

@enduml
```

### オブジェクト図

````markdown
```plantuml
@startuml PERT
skinparam svgDimensionStyle false
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title PERT: Project Name

map Kick.Off {
}
map task.1 {
    Start => End
}
map task.2 {
    Start => End
}
map task.3 {
    Start => End
}
map task.4 {
    Start => End
}
map task.5 {
    Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
@enduml
```
````

```plantuml
@startuml PERT
skinparam svgDimensionStyle false
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title PERT: Project Name

map Kick.Off {
}
map task.1 {
    Start => End
}
map task.2 {
    Start => End
}
map task.3 {
    Start => End
}
map task.4 {
    Start => End
}
map task.5 {
    Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
@enduml
```

### ネットワーク図

````markdown
```plantuml
@startuml
skinparam svgDimensionStyle false
!include <office/Servers/application_server>
!include <office/Servers/database_server>

nwdiag {
  network dmz {
      address = "210.x.x.x/24"

      // set multiple addresses (using comma)
      web01 [address = "210.x.x.1, 210.x.x.20",  description = "<$application_server>\n web01"]
      web02 [address = "210.x.x.2",  description = "<$application_server>\n web02"];
  }
  network internal {
      address = "172.x.x.x/24";

      web01 [address = "172.x.x.1"];
      web02 [address = "172.x.x.2"];
      db01 [address = "172.x.x.100",  description = "<$database_server>\n db01"];
      db02 [address = "172.x.x.101",  description = "<$database_server>\n db02"];
  }
}
@enduml
```
````

```plantuml
@startuml
skinparam svgDimensionStyle false
!include <office/Servers/application_server>
!include <office/Servers/database_server>

nwdiag {
  network dmz {
      address = "210.x.x.x/24"

      // set multiple addresses (using comma)
      web01 [address = "210.x.x.1, 210.x.x.20",  description = "<$application_server>\n web01"]
      web02 [address = "210.x.x.2",  description = "<$application_server>\n web02"];
  }
  network internal {
      address = "172.x.x.x/24";

      web01 [address = "172.x.x.1"];
      web02 [address = "172.x.x.2"];
      db01 [address = "172.x.x.100",  description = "<$database_server>\n db01"];
      db02 [address = "172.x.x.101",  description = "<$database_server>\n db02"];
  }
}
@enduml
```

### ガントチャート図

````markdown
```plantuml
@startgantt
skinparam svgDimensionStyle false
<style>
ganttDiagram {
	task {
		FontName Helvetica
		FontColor red
		FontSize 18
		FontStyle bold
		BackGroundColor GreenYellow
		LineColor blue
	}
	milestone {
		FontColor blue
		FontSize 25
		FontStyle italic
		BackGroundColor yellow
		LineColor red
	}
	note {
		FontColor DarkGreen
		FontSize 10
		LineColor OrangeRed
	}
	arrow {
		FontName Helvetica
		FontColor red
		FontSize 18
		FontStyle bold
		BackGroundColor GreenYellow
		LineColor blue
		LineStyle 8.0;13.0
		LineThickness 3.0
	}
	separator {
		BackgroundColor lightGreen
		LineStyle 8.0;3.0
		LineColor red
		LineThickness 1.0
		FontSize 16
		FontStyle bold
		FontColor purple
		Margin 5
		Padding 20
	}
	timeline {
	    BackgroundColor Bisque
	}
	closed {
		BackgroundColor pink
		FontColor red
	}
}
</style>
Project starts the 2020-12-01

[Task1] lasts 10 days
sunday are closed

note bottom
  memo1 ...
  memo2 ...
  explanations1 ...
  explanations2 ...
end note

[Task2] lasts 20 days
[Task2] starts 10 days after [Task1]'s end
-- Separator title --
[M1] happens on 5 days after [Task1]'s end

<style>
	separator {
	    LineColor black
		Margin 0
		Padding 0
	}
</style>

-- end --
@endgantt
```
````

```plantuml
@startgantt
skinparam svgDimensionStyle false
<style>
ganttDiagram {
	task {
		FontName Helvetica
		FontColor red
		FontSize 18
		FontStyle bold
		BackGroundColor GreenYellow
		LineColor blue
	}
	milestone {
		FontColor blue
		FontSize 25
		FontStyle italic
		BackGroundColor yellow
		LineColor red
	}
	note {
		FontColor DarkGreen
		FontSize 10
		LineColor OrangeRed
	}
	arrow {
		FontName Helvetica
		FontColor red
		FontSize 18
		FontStyle bold
		BackGroundColor GreenYellow
		LineColor blue
		LineStyle 8.0;13.0
		LineThickness 3.0
	}
	separator {
		BackgroundColor lightGreen
		LineStyle 8.0;3.0
		LineColor red
		LineThickness 1.0
		FontSize 16
		FontStyle bold
		FontColor purple
		Margin 5
		Padding 20
	}
	timeline {
	    BackgroundColor Bisque
	}
	closed {
		BackgroundColor pink
		FontColor red
	}
}
</style>
Project starts the 2020-12-01

[Task1] lasts 10 days
sunday are closed

note bottom
  memo1 ...
  memo2 ...
  explanations1 ...
  explanations2 ...
end note

[Task2] lasts 20 days
[Task2] starts 10 days after [Task1]'s end
-- Separator title --
[M1] happens on 5 days after [Task1]'s end

<style>
	separator {
	    LineColor black
		Margin 0
		Padding 0
	}
</style>

-- end --
@endgantt
```

PlantUML記法なら簡単にグラフを書けて便利なので、どんどん使っていきたいと思います。
