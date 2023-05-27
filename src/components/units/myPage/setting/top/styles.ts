import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const SettingTop = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(204, 204, 204, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.div`
  width: 130px;
  height: 130px;
  background-color: #ccc;
  border-radius: 50%;
`;
export const AvatarEdit = styled.button`
  width: 130px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 0;
  background-color: #111;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;
export const AvatarRemove = styled.button`
  width: 130px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 0;
  font-weight: 600;
  background: none;
  margin-top: 10px;
  cursor: pointer;
`;
export const ProfileWrap = styled.div`
  width: 570px;
  height: 210px;
  word-break: break-all;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProfileBox = styled.div``;
export const ProfileNickname = styled.h2`
  font-size: 36px;
  line-height: 36px;
  font-weight: 600;
`;
export const ProfileIntroduce = styled.p`
  color: #888;
  margin-top: 20px;
`;
export const ProfileEditBtn = styled.div`
  width: 23%;
  display: flex;
  justify-content: space-between;
`;
export const ProfileEdit = styled.button`
  border: none;
  border-bottom: 1px solid #111;
  background: none;
  font-weight: 600;
  cursor: pointer;
  display: inline;
`;
export const Text = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 16px;
  margin: 10px 0;
  font-size: 16px;
`;
export const Form = styled.form`
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
`;
