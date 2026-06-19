function TextInput({text, setText}) {
    return(
        <>
            <label>Type something:</label>
              <textarea 
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 placeholder="Start typing..."
             />
        </>    
    );
}

export default TextInput;