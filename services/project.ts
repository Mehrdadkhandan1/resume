import toast from "react-hot-toast";
import http from "./http";


export const addProject = async (formData: FormData) => {
    const res = await http.post("/projects/add-project", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    if (res.status === 200) {
        toast.success('پروژه با موفقیت ثبت شد')
        return res.data
    }
}