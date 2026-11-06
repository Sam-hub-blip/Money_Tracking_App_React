function AddBtn({ setShowModal }) {
    

    return (
        <button type="button" onClick={setShowModal(true)}>
            <span>
                + Add Transaction
            </span>
        </button>
    );
}

export default AddBtn
