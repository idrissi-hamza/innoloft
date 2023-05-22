import DOMPurify from "dompurify";

export default function createMarkup(html: string) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}