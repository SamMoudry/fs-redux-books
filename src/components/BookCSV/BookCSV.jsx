

function BookCSV () {
    


    return(
        // sends file as a POST to the server
        <form action='/upload' method="POST" enctype="multipart/form-data">
            <input type="file" name="file"
                accept=".csv"/>
            <button type="submit">Add Books</button>
        </form>
    );
}

export default BookCSV;