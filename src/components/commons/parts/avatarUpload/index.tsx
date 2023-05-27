import { PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal, Upload, UploadFile } from "antd";
import { RcFile, UploadProps } from "antd/es/upload";
import { gql } from "@apollo/client";
import { memo, useEffect, useState } from "react";


const getBase64 = (file: RcFile): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});

const uploadButton = (
	<div className="avatarUpload">
		<PlusOutlined />
		<div style={{ marginTop: 8 }}>Upload</div>
	</div>
);

function AvatarUpload (props: any): JSX.Element {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");

	useEffect(() => {
		if(props.data !== undefined){
			let arr: any[] = []
			props.data.map((el:any) => {
				let obj: any = {url: `https://storage.googleapis.com/${el}`}
				arr.push(obj)
			})
			props.setFileList(arr)
		}
	}, [])

	const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
		props.setFileList(newFileList);
	};

	const handlePreview = async (file: UploadFile) => {
		file.preview = await getBase64(file.originFileObj as RcFile);
		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(
			file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
		);
	};

  const handleCancel = () => setPreviewOpen(false);

	return (
		<>
			<Upload
				name="avatar"
				listType="picture-circle"
				onChange={handleChange}
				onPreview={handlePreview}
        		fileList={props.fileList}
			>
				{props.fileList.length === 1 ? null : uploadButton}
			</Upload>
			<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>

		</>
	);
}
export default AvatarUpload