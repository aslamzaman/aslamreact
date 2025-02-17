

const FetchData = () => {


    const str = `
    *** -------- Page GET --------------------------

      const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const response = await fetch(\`\${process.env.NEXT_PUBLIC_BASE_URL}/api/customer\`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                // console.log(data);
                setCustomers(data);
            setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();


  *** -------- Add POST --------------------------
 const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const apiUrl = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/customer\`;
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newObject)
            };
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
              message(\`Customer is created at \${new Date().toISOString()}\`);
            } else {
              throw new Error("Failed to create customer");
            } 
          } catch (error) {
              console.error("Error saving customer data:", error);
              message("Error saving customer data.");
         }finally {
           setShow(false);
         }
    }

  *** -------- Edit PUT --------------------------
  const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const apiUrl = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/\${id}\`;
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            };
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
                message(\`Updated successfully completed at \${new Date().toISOString()}\`);
            } else {
                throw new Error("Failed to create customer");
            } 
        } catch (error) {
            console.error("Error saving customer data:", error);
            message("Error saving customer data.");
        }finally {
            setShow(false);
        }
    }


  *** -------- Delete PATCH --------------------------
  const softDeleteHandler = async () => {
        try {
            const response = await fetch(\`\${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/\${id}\`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
           // console.log(data)
            message(\`Deleted successfully completed. id: \${id}\`);
        } catch (error) {
            console.error("Error fetching data:", error);
        }finally{
            setShow(false);          
        }
    }


    const hardDeleteHandler = async () => {
        try {
            const apiUrl = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/\${id}\`;
            const requestOptions = { method: "DELETE" };
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
                message(\`Deleted successfully completed. id: \${id}\`);
            } else {
                throw new Error("Failed to delete customer");
            }         
        } catch (error) {
            console.log(error);
            message("Data deleting error");
        }
        setShow(false);
    }
  
  
    `;

    return str;
}

export default FetchData;