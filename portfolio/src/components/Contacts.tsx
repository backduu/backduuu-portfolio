import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'qorengus532@naver.com',
      href: 'mailto:qorengus532@naver.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+82 10-6254-4290',
      href: 'tel:+821062544290'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Seoul, South Korea',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-github-text mb-4">
            Get In <span className="text-github-accent">Touch</span>
          </h2>
          <p className="text-lg text-github-text-secondary max-w-2xl mx-auto">
            채용/협업 관련해서 그저 작은 인사라도 좋습니다. 함께 새로운 기회를 만들어봐요!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-github-text mb-6">
                Contact
              </h3>
              <p className="text-github-text-secondary mb-8">
              함께할 동료료를 찾고 계시다면, 언제든 연락해 주세요.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="contact-info-item flex items-center p-4 bg-github-surface rounded-lg hover:bg-github-surface/80 transition-all duration-300 group"
                  >
                    <div className="text-github-accent mr-4 group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-github-text-secondary">{info.label}</div>
                      <div className="text-github-text font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-github-text mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`social-link p-3 bg-github-surface rounded-lg text-github-text-secondary ${social.color} transition-all duration-300 hover:scale-110 hover:bg-github-surface/80`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
         
            <div className="mt-6 p-4 bg-github-accent/10 border border-github-accent/20 rounded-lg">
              <p className="text-sm text-github-text-secondary">
                <strong className="text-github-accent">Response Time:</strong> 📅 연락 가능 시간: 평일 오전 9시 ~ 오후 9시 (KST) <br/>
                                                                                그 외 시간에도 메일 주시면 가능한 한 빨리 답변드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;