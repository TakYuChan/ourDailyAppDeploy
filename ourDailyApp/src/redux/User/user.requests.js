import axios from "axios";
import Url from "../../url";

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData, imgName) => {
    let res;
    if(imgName) {
        res =  axios
        // .patch(`/api/v1/users/updateMe`, imgName, {withCredentials: true})
        .patch(`${Url}/users/updateMe`, imgName, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }
    else {
        res =  axios
        // .patch(`/api/v1/users/updateMe`, formData, {withCredentials: true})
        .patch(`${Url}/users/updateMe`, formData, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }

    return res;
}

export const changeUserPassword = async(changePasswordDetails, url) => {

    const {password, newPassword, confirmNewPassword} = changePasswordDetails;

    const backEndResponse = await axios({
        method: "PATCH",
        url,
        data: {
            password,
            newPassword,
            confirmNewPassword
        },
        withCredentials: true,
      });
    
      return backEndResponse;
}

export const deleteMe = async(url) => {
    const backEndResponse = await axios({
        method: "PATCH",
        url,
        withCredentials: true,
      });
    
      return backEndResponse;
}

export const sendForgotPwEmail = async(email, url) => {
    const backEndResponse = await axios({
        method: "POST",
        url,
        data: {
            email,
        }
    });

    return backEndResponse;
}

export const resetPassword = async({newPassword, confirmPassword}, url) => {
    const backEndResponse = await axios({
        method: "PATCH",
        url,
        data: {
            newPassword,
            confirmPassword,
        }
    });

    return backEndResponse;
}

export const changeUserBackground = async(formData, url) => {
    let res;
    res =  await axios.patch(url, formData, {withCredentials: true});

    return res;
}

export const getUserBackground = async(url) => {
    let res;
    res =  await axios.get(url, {withCredentials: true});

    return res;
}

export const getUserWebData = async(url) => {
    let res;
    res =  await axios.get(url, {withCredentials: true});

    return res;
}