import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import Carousel from './Carousel';
import TypingText from './TypingText';

const Hero = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Ism majburiy';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email majburiy';
    } else if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = 'Email noto‘g‘ri formatda';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Xabar bo‘sh bo‘lishi mumkin emas';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.warning("Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring.");
      return;
    }

    emailjs.sendForm(
      'service_t2mtj23',
      'template_cmsxh2j',
      formRef.current,
      'CgdPqKja6Wncq_JLF'
    ).then((result) => {
      toast.success("Xabar muvaffaqiyatli yuborildi!");
      setFormData({ user_name: '', user_email: '', message: '' });
    }, (error) => {
      toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
        <Toaster richColors position='bottom-right' />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Carousel />
        <div>
          <h1 className="text-5xl font-bold">
            Hello, <TypingText />
          </h1>
          <p className="py-6">
            Hi, I’m Bekjon – a React developer with a strong interest in building clean, responsive, and animated UIs. Let’s build something amazing together!
          </p>

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Contact me</label>
            </div>

            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <form ref={formRef} onSubmit={sendEmail} className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Fill in the information</legend>

                  <input
                    name="user_name"
                    type="text"
                    className={`input mt-3.5 ${errors.user_name ? 'input-error' : ''}`}
                    placeholder="Your Name"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>}

                  <input
                    name="user_email"
                    type="email"
                    className={`input mt-3.5 ${errors.user_email ? 'input-error' : ''}`}
                    placeholder="Your Email"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                  {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>}

                  <textarea
                    name="message"
                    className={`textarea mt-3.5 ${errors.message ? 'textarea-error' : ''}`}
                    placeholder="Why are you contacting me?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

                  <button type="submit" className='btn btn-primary mt-3.5'>Submit</button>
                </fieldset>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
