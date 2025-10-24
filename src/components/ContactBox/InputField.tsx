export default function InputField({ FieldName, placeholder }: { FieldName: string, placeholder: string }) {
  return (
    <div className="w-full mb-4">
      <label className="block font-semibold text-lg">{FieldName}</label>
      {FieldName === "Message" ? (
        <textarea placeholder={placeholder} className="w-full p-4 rounded-md border border-secondaryYellow mb-4 h-32"></textarea>
      ) : (
        <input type={FieldName === "Email" ? "email" : "text"} placeholder={placeholder} className="w-full p-4 rounded-md border border-secondaryYellow " />
      )}
    </div>
  );
}