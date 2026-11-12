function AddBtn({ setShowModal }) {
    
    const handeClick = () => {
        setShowModal(true)
    }
    return (
        <button type="button" onClick={handeClick}>
            <span>
                + Add Transaction
            </span>
        </button>
    );
}

export default AddBtn
