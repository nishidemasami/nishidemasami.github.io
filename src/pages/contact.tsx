import { useState } from 'react';

import { Send, CheckCircle } from '@mui/icons-material';
import {
	Button,
	Checkbox,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Link,
	TextField,
} from '@mui/material';
import { GetStaticProps } from 'next';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getRecentPosts, getTags, PostItems } from '../utils/Content';
import { markdownToHtml } from '../utils/Markdown';

const contentMarkdown = String.raw`
### 連絡フォーム

お問い合わせや連絡だけでなく、ご意見・ご要望などもお待ちしています。

また、営業メールや日頃の愚痴など、なんでも送っていただいて構いませんが、その場合返信しないことがあります。
`;

type AboutProps = {
	recents: PostItems[];
	tags: string[];
	contentHTML: string;
};

const buttonIcon = (progress: boolean, success: Boolean | undefined) => {
	if (progress) {
		return <CircularProgress size={20} />;
	}
	if (success) {
		return <CheckCircle />;
	}
	return <Send />;
};

const About = (props: AboutProps) => {
	const [success, setSuccess] = useState<Boolean>();
	const [progress, setProgress] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [body, setBody] = useState<string>('');
	const [checked, setChecked] = useState(false);
	const [open, setOpen] = useState(false);

	const [errorEmail, setErrorEmail] = useState(false);
	const [errorName, setErrorName] = useState(false);
	const [errorBody, setErrorBody] = useState(false);

	return (
		<Main
			recents={props.recents}
			tags={props.tags}
			meta={<Meta title="連絡フォーム" description="連絡フォーム" />}
		>
			<h1 className="content-title">連絡フォーム</h1>
			<Content>
				<div dangerouslySetInnerHTML={{ __html: props.contentHTML }} />
				<TextField
					margin="dense"
					error={errorName}
					fullWidth
					required
					value={name}
					disabled={progress || Boolean(success)}
					type="text"
					onChange={(e) => {
						setErrorName(!e.target.value);
						setName(e.target.value);
					}}
					label="名前"
				/>
				<TextField
					margin="dense"
					error={errorEmail}
					fullWidth
					required
					value={email}
					disabled={progress || Boolean(success)}
					type="email"
					FormHelperTextProps={{
						sx: { marginTop: '0!important', marginBottom: '0!important' },
					}}
					onChange={(e) => {
						setErrorEmail(!e.target.value);
						setEmail(e.target.value);
					}}
					label="連絡先"
					helperText="メールアドレスやSNSアカウントなど"
				/>
				<TextField
					margin="dense"
					error={errorBody}
					fullWidth
					required
					value={body}
					disabled={progress || Boolean(success)}
					minRows={3}
					type="text"
					multiline
					onChange={(e) => {
						setErrorBody(!e.target.value);
						setBody(e.target.value);
					}}
					label="本文"
				/>
				<Button
					className="my-2"
					variant="outlined"
					endIcon={buttonIcon(progress, success)}
					disabled={!checked || progress || Boolean(success)}
					onClick={async () => {
						let errorEmailWork = false;
						let errorNameWork = false;
						let errorBodyWork = false;
						if (!email) {
							errorEmailWork = true;
							setErrorEmail(true);
						}
						if (!body) {
							errorBodyWork = true;
							setErrorBody(true);
						}
						if (!name) {
							errorNameWork = true;
							setErrorName(true);
						}
						if (errorEmailWork || errorNameWork || errorBodyWork) {
							return;
						}
						setProgress(true);

						const response = await fetch(
							'https://contact-form.workers.nishide-office.com/',
							{
								method: 'POST',
								cache: 'no-cache',
								mode: 'cors',
								redirect: 'error',
								headers: { 'Content-Type': 'application/json' },
								referrerPolicy: 'no-referrer',
								body: JSON.stringify({ email, body, name }),
							},
						).catch(() => ({ ok: false }));
						setProgress(false);
						setSuccess(response.ok);
					}}
				>
					{success ? '送信に成功しました' : '送信'}
				</Button>
				<Checkbox
					className="my-2 ml-2 pr-0"
					checked={checked}
					disabled={progress || Boolean(success)}
					onChange={(event) => {
						setChecked(event.target.checked);
					}}
				/>
				<Link
					className="text-base align-middle my-2"
					component="button"
					onClick={() => setOpen(true)}
				>
					利用規約
				</Link>
				<span className="text-base .text-zinc-900 no-underline align-middle">
					に同意する
				</span>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">利用規約</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							送信された情報はセキュリティ規格に関する国際規格であるISO/27001に準拠しているサービス(AWS、CloudFlare、GitLab、Slack、GitHub
							Actions、Google Cloud
							Platformなど)のみを利用し、万全のセキュリティ体制により適切に取り扱いますが、このサービスを利用したことに起因して何かしらの損害が発生しても、直接損害か間接損害か否か、予見できたか否かを問わず、一切の責任を負いません。
							<br />
							送信された内容は、このウェブサイトの運営のため、日本語ドキュメントによる技術的知見の普及のため、および送信者との連絡のためにのみ使用します。
							<br />
							送信された内容は、職務上守秘義務を負う情報とはみなされません。
							<br />
							送信された内容によって、いかなる契約も成立することはありません。
							<br />
							IPアドレスなどの送信元情報も送信された情報と共に保存しており、違法性がある場合または法令に基づく場合に限り、情報を警察などの捜査機関や行政機関に情報を公開することがあります。
							<br />
							スパムフィルタによるフィルタリングをしており、スパムでなくても送信された内容がスパムと誤判定されて届かないことがあります。また、届いたお問い合わせに対して必ず返信することを約束するものではありません。
							<br />
							以上についてご了承下さい。
							<br />
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)} variant="outlined">
							閉じる
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					open={success === false}
					onClose={() => setSuccess(undefined)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">エラー</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							送信に失敗しました。しばらく経ってからやりなおしてください。
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setSuccess(undefined)} variant="outlined">
							閉じる
						</Button>
					</DialogActions>
				</Dialog>
			</Content>
		</Main>
	);
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
	const recents = getRecentPosts(['title', 'date', 'slug']);

	return {
		props: {
			recents,
			tags: getTags(),
			contentHTML: await markdownToHtml(contentMarkdown),
		},
	};
};

export default About;
