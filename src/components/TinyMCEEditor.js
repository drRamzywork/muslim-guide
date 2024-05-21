// src/components/TinyMCEEditor.js
import { useEffect, useRef } from "react";

const TinyMCEEditor = ({ content, setContent }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Dynamically import TinyMCE to avoid SSR issues
    const loadTinymce = async () => {
      const tinymce = (await import("tinymce/tinymce")).default;
      await import("tinymce/icons/default");
      await import("tinymce/themes/silver");
      await import("tinymce/plugins/link");
      await import("tinymce/plugins/table");
      await import("tinymce/skins/ui/oxide/skin.min.css");

      tinymce.init({
        setup: (editor) => {
          editorRef.current = editor;
          editor.on("Change", () => {
            setContent(editor.getContent());
          });
        },
      });
    };

    loadTinymce();

    return () => {
      if (editorRef.current) {
        editorRef.current.remove();
      }
    };
  }, [setContent]);

  return <textarea id="editor" defaultValue={content}></textarea>;
};

export default TinyMCEEditor;
