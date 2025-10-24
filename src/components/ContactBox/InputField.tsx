export default function InputField({ FieldName, placeholder }: { FieldName: string, placeholder: string }) {
  return (
    <div className="w-full mb-4 text-secondaryGreen">
      <label className="block font-semibold text-lg">{FieldName}</label>
      {FieldName === "Message" ? (
        <textarea placeholder={placeholder} className="placeholder:text-primaryGreen text-secondaryGreen border-primaryGreen w-full p-4 text-lg rounded-md border-3 bg-primaryYellow mb-4 h-32 outline-none focus:border-secondaryGreen focus:border-3"></textarea>
      ) : (
        <input type={FieldName === "Email" ? "email" : "text"} placeholder={placeholder} className="placeholder:text-primaryGreen w-full p-4 text-lg rounded-md border-3 text-secondaryGreen border-primaryGreen bg-primaryYellow outline-none focus:border-secondaryGreen focus:border-3" />
      )}
    </div>
  ); 
}