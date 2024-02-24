import React, { useState } from 'react';


function Messageme() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        try {
            if (name !== "" && email !== "" && message !== '') {

                setSubmitting(true);
                await fetch("https://lalithsendmail.onrender.com/sendmsg", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,

                    }),
                }).then((response) => {
                    console.log(response.data);
                    setSubmitting(false);
                    setSubmitted(true);
                })
                    .catch((error) => {
                        console.error(error);
                        setSubmitting(false);
                    });

            }
            else {
                setError(true);
                setTimeout(() => {
                    setError(false)
                }, 3000);


            }
        } catch (err) {
            console.log(err);
        }

    };

    return (

        <form className="max-w-[600px] min-w-[360px] mx-auto p-4" onSubmit={handleSubmit} id="msg_me">
            <h2 className='text-center text-[24px] mb-[20px] underline decoration-wavy text-[#00df9a]'>Message Me :</h2>;
            {error ? (<span  className='bg-white text-red-500 mb-[10px] w-full text-center'>
                Please fill all fields...
            </span>) : ""}
            {submitted ? (
                <p className="text-[#00a000] mt-[10px] mx-auto border p-4 text-center mb-3 font-bold space-x-6">Thank you! Your message has been sent.</p>
            ) : (
                <>
                    <input
                        className='w-full p-[10px] mb-[10px] border-[#ccc] round-[4px]'
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className='w-full p-[10px] mb-[10px] border-[#ccc] rounded-[4px]'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        className='w-full p-[10px] mb-[10px] border-[#ccc] rounded-[4px]'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        title='please fill this input box'
                    ></textarea>
                    <button className='block w-full p-[10px] bg-[#007bff] text-[#fff] border-none rounded-[4px] cursor-pointer mb-[20px]' type="button" onClick={handleSubmit}>
                        {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </>
            )}
        </form>
    );
};

export default Messageme;
