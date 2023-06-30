export default function ChatFooterButtons() {
  return (
    <>
      <button
        type="button"
        className="mx-2 flex h-6 w-6 flex-shrink-0 text-blue-600 hover:text-blue-700 focus:outline-none"
      >
        <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
          <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
        </svg>
      </button>
    </>
  );
}
