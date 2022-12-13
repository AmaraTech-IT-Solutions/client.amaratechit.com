import React, { useEffect, useState } from 'react';
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

const Form = () => {


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
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white ">
        <form
        onSubmit={submitHandler}
        >
            {/* Company or Name below*/}
          <div className="form-group mb-6">
            <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        placeholder="Company or Individual Name"
        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            {fullNameError && <InlineError error={fullNameError} />}
          </div>
          {/* Email Below */}
          <div className="form-group mb-6">
            <input
       required
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       type="email"
       placeholder="email@domain.com"
       className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
         />
           {emailError && <InlineError error={emailError} />}
          </div>
          {/* Phone Number Below */}
          
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

                {/* Message Below */}
          <div className="form-group mb-6">
            <textarea
             required
             value={message}
             onChange={(e) => setMessage(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
             
              rows="3"
              placeholder="Kindly list item(s) below & any other details you would like us know about your request"
            />
             {messageError && <InlineError error={messageError} />}
          </div>
     
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-[#228B22]
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-[#228B22] hover:shadow-lg
      focus:bg-[#228B22] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            {buttonLoading ? 'Loading..' : 'SEND'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Form;
