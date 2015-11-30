function SelectArea(selectList){
    if (selectList.value == "allCustomers") {
        document.getElementById("sectionOne").style.visibility = "visible";
        document.getElementById("sectionTwo").style.visibility = "hidden";
        document.getElementById("sectionThree").style.visibility = "hidden";
        AllCustomersRequest();
    }//end if
    else if (selectList.value == "custOrderHis"){
        document.getElementById("sectionOne").style.visibility = "hidden";
        document.getElementById("sectionTwo").style.visibility = "visible";
        document.getElementById("sectionThree").style.visibility = "hidden";
        document.getElementById("orderHistoryResult2").innerHTML = "";
        document.getElementById("customerIDSecTwo").value = "";
        document.getElementById("customerIDSecTwo").focus();
    }//end if else
    else if (selectList.value == "orderPlacedCustomer"){
        document.getElementById("sectionOne").style.visibility = "hidden";
        document.getElementById("sectionTwo").style.visibility = "hidden";
        document.getElementById("sectionThree").style.visibility = "visible";
        document.getElementById("placedOrders3").innerHTML = "";
        document.getElementById("customerIDSecThree").value = "";
        document.getElementById("customerIDSecThree").focus();
    }//end if else
    else {
        document.getElementById("sectionOne").style.visibility = "hidden";
        document.getElementById("sectionTwo").style.visibility = "hidden";
        document.getElementById("sectionThree").style.visibility = "hidden";
    }//end else
    
}//end SelectArea

function AllCustomersRequest() {
    var objReq = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    objReq.onreadystatechange = function() {
        if (objReq.readyState == 4 && objReq.status == 200) {
            var test1 = objReq.responseText;
            var output = JSON.parse(objReq.responseText);
            AllCustomersOutput(output);
        }//end if
        if (objReq.readyState == 4 && objReq.status != 200) {
            alert("There was an error processing the request!");
        }
    }//end onreadystatechange function
    
    objReq.open("GET", url, true);
    objReq.send();
}//end AllCustomersRequest


function AllCustomersOutput(outputResult) {
    //code
    var displayText = "<table class=\"center\"><caption>Customer List</caption>" +
                      "<tr><th>ID</th><th>Name</th><th>City</th></tr>";
    var appendData = "";
    for (var i = 0; i < outputResult.GetAllCustomersResult.length; i++) {
        appendData = "<tr><td>" + outputResult.GetAllCustomersResult[i].CustomerID +
                     "</td><td>" + outputResult.GetAllCustomersResult[i].CompanyName +
                     "</td><td>" + outputResult.GetAllCustomersResult[i].City +
                     "</td></tr>"
        displayText += appendData;
    }//end for
    
    displayText += "</table>"
    
    document.getElementById("sectionOne").innerHTML = displayText;
}//end function AllCustomersOutput

function OrderHistoryRequest() {
    var objReq = new XMLHttpRequest();
    document.getElementById("orderHistoryResult2").innerHTML = "";
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    var customerID1 = document.getElementById("customerIDSecTwo").value;
    url += customerID1;
    
    objReq.onreadystatechange = function() {
        if (objReq.readyState == 4 && objReq.status == 200) {
            var test1 = objReq.responseText;
            var output = JSON.parse(objReq.responseText);
            OrderHistoryOutput(output, customerID1);
        }//end if
        if (objReq.readyState == 4 && objReq.status != 200) {
            alert("There was an error processing the request!");
        }
    }//end onreadystatechange function
    
    if (customerID1 != ""){
            objReq.open("GET", url, true);
            objReq.send();
    }//end if
    else {
        alert("Please Enter a Customer ID!");
        document.getElementById("customerIDSecTwo").focus();
    }//end else
}//end OrderHistoryRequest

function OrderHistoryOutput(outputResult, customerID) {
    //code
    var displayText = "<table class=\"center\"><caption>Order History for "+ customerID +"</caption>" +
                      "<tr><th>Product Name</th><th>Quantity Ordered</th></tr>";
    var appendData = "";
    for (var i = 0; i < outputResult.length; i++) {
        appendData = "<tr><td>" + outputResult[i].ProductName +
                     "</td><td>" + outputResult[i].Total +
                     "</td></tr>"
        displayText += appendData;
    }//end for
    
    displayText += "</table>"
    
    document.getElementById("orderHistoryResult2").innerHTML = displayText;
}//end function OrderHistoryOutput


function OrdersPlacedRequest() {
    var objReq = new XMLHttpRequest();
    document.getElementById("placedOrders3").innerHTML = "";
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    var customerID2 = document.getElementById("customerIDSecThree").value;
    url += customerID2;
    
    objReq.onreadystatechange = function() {
        if (objReq.readyState == 4 && objReq.status == 200) {
            var test1 = objReq.responseText;
            var output = JSON.parse(objReq.responseText);
            OrdersPlacedOutput(output, customerID2);
        }//end if
        if (objReq.readyState == 4 && objReq.status != 200) {
            alert("There was an error processing the request!");
        }
    }//end onreadystatechange function
    
    if (customerID2 != ""){
            objReq.open("GET", url, true);
            objReq.send();
    }//end if
    else {
        alert("Please Enter a Customer ID!");
        document.getElementById("customerIDSecThree").focus();
    }//end else
}//end OrdersPlacedRequest

function OrdersPlacedOutput(outputResult, customerID) {
    //code
    var displayText = "<table class=\"center\"><caption>Placed Orders for "+ customerID +"</caption>" +
                      "<tr><th>Order Date</th><th>OrderID</th><th>Shipping Address</th><th>Shipping City</th>" +
                      "<th>Shipping Name</th><th>Shipping Postal Code</th><th>Shipped Date</th></tr>";
    var appendData = "";
    for (var i = 0; i < outputResult.GetOrdersForCustomerResult.length; i++) {
        appendData = "<tr><td>" + outputResult.GetOrdersForCustomerResult[i].OrderDate +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].OrderID +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].ShipAddress +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].ShipCity +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].ShipName +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].ShipPostcode +
                     "</td><td>" + outputResult.GetOrdersForCustomerResult[i].ShippedDate +
                     "</td></tr>"
        displayText += appendData;
    }//end for
    
    displayText += "</table>"
    
    document.getElementById("placedOrders3").innerHTML = displayText;
}//end function OrdersPlacedOutput