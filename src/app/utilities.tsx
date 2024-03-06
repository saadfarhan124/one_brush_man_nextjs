import emailjs from '@emailjs/browser';

const sendEmail = async (e: any, setLoading: any) => {
    setLoading(true);
    const templateParams = {
        name: e.name,
        email: e.email,
        message: `${e.message}`,
    };
    const response = await emailjs
        .send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            templateParams,
            {publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID!}
        );
    if (response.status == 200){

    }else{

    }
    setLoading(false);
}

export default sendEmail;
