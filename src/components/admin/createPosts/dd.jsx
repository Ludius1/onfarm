// const onFIleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files && e.target.files;
//     if (!file) {
//       return;
//     }
//     const fileList = Array.from(file);
//     const imageUrl: string[] | null = fileList.map(
//       (image) => file && URL.createObjectURL(image)
//     );
//     const newImages = [...images];
//     imageUrl && newImages.push(...imageUrl);
//     setImages(newImages);

//     const formData = new FormData();
//     fileList && fileList.forEach((file) => formData.append("image", file));
//     console.log(file);
//     if (file) {
//       axios
//         .post(${apiUrl}/post/upload, formData, { headers })
//         .then((response) => {
//           console.log(response.data);
//           let url = response.data.data;
//           let urlList: string[] = [];
//           urlList.push(...url);
//           console.log("urlList", urlList);
//           setNewTweet((prevVals) => ({
//             ...prevVals,
//             images: urlList,
//           }));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };