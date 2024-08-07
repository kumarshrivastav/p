import {
  Button,
  Checkbox,
  Spinner,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import OTPForm from "./OTPForm";
import { verifyVisitor } from "../http/http";
function PopUp({
  closeHandleModal,
  openModal,
  setOpenModal,
  visitorId,
  verified,
  setVerified,
  otpStatus,
  setOtpStatus,
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await verifyVisitor(visitorId, email);
      setOtpStatus(true);

      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setOtpStatus(false);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <Modal
      show={openModal}
      size="md"
      popup
      onClose={closeHandleModal}
      initialFocus={email}
    >
      <Modal.Header />
      <Modal.Body>
        {otpStatus && !verified ? (
          <>
            <OTPForm
              email={email}
              visitorId={visitorId}
              setOpenModal={setOpenModal}
              setVerified={setVerified}
            />
          </>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white">
              Please verify your identity
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  className="font-serif font-semibold"
                  value="Your email"
                />
              </div>
              <TextInput
                type="email"
                id="email"
                value={email}
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                className="font-serif"
                required
              />
            </div>
            <div className="w-full">
              {loading ? (
                <Button
                  disabled={loading}
                  className="font-serif rounded-none  bg-customeButtonColor hover:!border-2 hover:!border-customeButtonColor hover:!bg-white hover:!text-customeButtonColor hover:!outline-none  "
                >
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">please wait...</span>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="font-serif rounded-none  bg-customeButtonColor hover:!border-2 hover:!border-customeButtonColor hover:!bg-white hover:!text-customeButtonColor hover:!outline-none  "
                >
                  Verify your email
                </Button>
              )}
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}
export default PopUp;
