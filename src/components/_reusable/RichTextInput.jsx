import React, { useEffect, useLayoutEffect, useState } from "react";

import { connect } from "react-redux";
import { setCurrentProject } from "../../redux/actions/projectActions";

import {
	Editor,
	EditorState,
	RichUtils,
	convertToRaw,
	convertFromHTML,
	ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

import "../../../node_modules/draft-js/dist/Draft.css";
import "../../css/_reusable/RichText.css";
import { useRouteMatch } from "react-router-dom";

const RichTextInput = ({ currentProject, setCurrentProject }) => {
	const projectId = useRouteMatch().params.id;
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	useLayoutEffect(() => {
		if (projectId !== undefined) {
			setEditorState(() =>
				EditorState.createWithContent(
					ContentState.createFromBlockArray(
						convertFromHTML(currentProject.description)
					)
				)
			);
		}
	}, []);

	console.log(currentProject.description);

	useEffect(() => {
		setCurrentProject({
			...currentProject,
			description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
		});
	}, [draftToHtml(convertToRaw(editorState.getCurrentContent()))]);

	const handleKeyCommand = (command) => {
		setEditorState(RichUtils.handleKeyCommand(editorState, command));
	};
	//   allow to use styles with keyboard shotcuts

	const onBoldClick = () => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
	};
	//   keyboard shotcut: cmd+B

	const onItalicClick = () => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
	};
	//   keyboard shotcut: cmd+I

	const onUnderlineClick = () => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
	};
	//   keyboard shotcut: cmd+U

	return (
		<div className="RichText">
			<button onClick={onBoldClick} type="button">
				Bold
			</button>
			<button onClick={onItalicClick} type="button">
				Italic
			</button>
			<button onClick={onUnderlineClick} type="button">
				Underline
			</button>
			<div className="editor">
				<Editor
					editorState={editorState}
					handleKeyCommand={(e) => handleKeyCommand(e)}
					onChange={(e) => setEditorState(e)}
					// dangerouslySetInnerHTML={{ __html: currentProject.description }}
				/>
			</div>
			{/* this textarea allows to collect the text and convert it to html < / > */}
			{/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
		</div>
	);
};

const mapStateToProps = ({ currentProject }) => ({
	currentProject,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentProject: setCurrentProject(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RichTextInput);
