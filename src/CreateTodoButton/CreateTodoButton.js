import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
      <button 
      className='btn-add'
      onClick={ 
        () => console.log("miau")
      }
      />
    )
  }

  export { CreateTodoButton };