alert("Hello thầy Tuấn đẹp trai ^^");


        document.getElementById("btn").onclick = () => {
            // Nhập vào số a
            let so_a = document.getElementById("soa");
            console.dir(soa);
            // Nhập vào số b
            let so_b = document.getElementById("sob");
            // Tính tổng 2 số
            let tong = (Number(so_a.value) + Number(so_b.value));
            document.getElementById("tong").value = tong;
        }