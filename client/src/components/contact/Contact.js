import React, { useEffect, useState } from 'react';
import atis from '../../assets/hero.mp4'
import { GetContries, IpAddress, SendEmail } from '../../API';
import InlineError from '../InlineError';
import Loading from '../Loading';
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhone,
} from '../Validation';
import { toast } from 'react-toastify';
import Toast from '../Toast';

const InputClass =
  'w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md';







function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState('United States');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  let result = countries && Object.keys(countries).map((key) => countries[key]);
  let output = result && result.find((x) => x.country_name === country);
  let outputResult = output && output.dialling_code;
  let phoneFull = outputResult && outputResult.concat(phone);

  useEffect(() => {
    if (!ipData & !countries) {
      IpAddress({ setLoading, setIpData });
      GetContries({ setLoading, setCountries });
    }
    // *********** VALIDATION **********
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });

    // ***********
    if (send) {
      toast.success(send.msg);
      setFullName("")
      setEmail("")
      setMessage("")
      setSend()
      setPhone("")
    }
  }, [fullName, email, phone, message, send, ipData, countries]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (!fullNameError & !emailError & !phoneError & !messageError) {
      SendEmail({ fullName, email, phone: phoneFull, message, setSend }).then(
        () => {
          setButtonLoading(false);
        }
      );
    }
  };

  return (
    <div >
      
        
     
      <Toast />
      <div className="container flex-colo py-12 mx-auto min-h-screen sm:py-2 px-4 ">
        {loading ? (
          <Loading />
        ) : (
          <div className="main-box lg:w-3/4 w-full flex box-shadow rounded-lg overflow-hidden">
            <div class="relative h-48 bg-primary rounded-bl-4xl">
          <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
            <div className="box-1 bg-white flex-colo py-6 sm:py-0">
            
              <img
                src="https://media.amaratechit.com/wp-content/uploads/2022/10/Logo-1.png"
                className="w-64 h-64 object-contain"
                alt="logo"
              />
             <div className="m-3"><video src={atis} autoPlay loop muted /></div>
              <p className="itaic text-sm">
                Your country is{' '}
                <span className="font-bold">({ipData && ipData})</span>
              </p>
            </div>
            <form
              onSubmit={submitHandler}
              className="box-2 bg-white pt-12 pb-6 sm:px-12 px-6"
            >
              <h2 className="sm:text-2xl text-xl text-center mb-12 font-semibold">
                Message Us
              </h2>
              {/* fullName */}
              <div className="my-6">
                <label>FullName</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  type="text"
                  placeholder="Company/Name"
                  className={InputClass}
                />
                {fullNameError && <InlineError error={fullNameError} />}
              </div>
              {/* email */}
              <div className="my-6">
                <label>Email</label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email@domain.com"
                  className={InputClass}
                />
                {emailError && <InlineError error={emailError} />}
              </div>
              {/* phone */}
              <div className="my-6">
                <label>Phone</label>
                <div className="grid gap-3 grid-cols-12 border-2 mt-2 border-border rounded-md w-full px-2">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="col-span-3 bg-main py-3 px-2 my-2 text-sm rounded"
                  >
                    {result &&
                      result.map((e, index) => (
                        <option key={index} value={e.country_name}>
                          {e.country_name}
                        </option>
                      ))}
                  </select>
                  <div className="tracking-widest col-span-2 border-x-2 border-border flex-colo">
                    {outputResult}
                  </div>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    placeholder="4108552206"
                    className="placeholder:text-gray text-main col-span-7 px-3"
                  />
                </div>
                {phoneError && <InlineError error={phoneError} />}
              </div>
              {/* message */}
              <div className="my-6">
                <label>Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How may we help you today?"
                  rows={3}
                  className="mt-2 w-full border-2 border-border py-4 placeholder:text-gray px-6 text-gray-900 rounded-md"
                />
                {messageError && <InlineError error={messageError} />}
              </div>
              {/* submit */}
              <button
                type="submit"
                disabled={buttonLoading && true}
                className="w-full border-2 border-primary hover:bg-white trans bg-primary text-white hover:text-primary mt-6 rounded-md tracking-widest py-4 font-subMain font-bold"
              >
                {buttonLoading ? 'Loading..' : 'SEND'}
              </button>
              
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
