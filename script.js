// Example data structure for Indian states, districts, blocks, and villages
// This is a subset for demonstration. You can expand this with real data.
const data = {
    "Maharashtra": {
        "Pune": {
            "Haveli": ["Alandi", "Lohgaon"],
            "Mulshi": ["Lavasa", "Pirangut"]
        },
        "Mumbai": {
            "Mumbai Suburban": ["Andheri", "Borivali"],
            "Mumbai City": ["Colaba", "Dadar"]
        }
    },
    "Karnataka": {
        "Bangalore": {
            "Bangalore North": ["Yelahanka", "Jalahalli"],
            "Bangalore South": ["Jayanagar", "Banashankari"]
        },
        "Mysore": {
            "Mysore Rural": ["Srirangapatna", "Pandavapura"],
            "Mysore Urban": ["Vijayanagar", "Gokulam"]
        }
    }
    // Add more states, districts, blocks, and villages as needed
};

const stateSelect = document.getElementById("state");
const districtSelect = document.getElementById("district");
const blockSelect = document.getElementById("block");
const villageSelect = document.getElementById("village");

// Function to populate options in a select element
function populateSelect(element, options) {
    element.innerHTML = '<option value="" disabled selected>Select</option>';
    for (const key of Object.keys(options)) {
        const option = document.createElement("option");
        option.value = key;
        option.text = key;
        element.appendChild(option);
    }
}

// Populate states on page load
window.onload = () => {
    populateSelect(stateSelect, data);
};

// Update districts when a state is selected
stateSelect.onchange = () => {
    const selectedState = stateSelect.value;
    if (data[selectedState]) {
        populateSelect(districtSelect, data[selectedState]);
        blockSelect.innerHTML = '<option value="" disabled selected>Select Block</option>';
        villageSelect.innerHTML = '<option value="" disabled selected>Select Village</option>';
    }
};

// Update blocks when a district is selected
districtSelect.onchange = () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    if (data[selectedState][selectedDistrict]) {
        populateSelect(blockSelect, data[selectedState][selectedDistrict]);
        villageSelect.innerHTML = '<option value="" disabled selected>Select Village</option>';
    }
};

// Update villages when a block is selected
blockSelect.onchange = () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    const selectedBlock = blockSelect.value;
    if (data[selectedState][selectedDistrict][selectedBlock]) {
        populateSelect(villageSelect, data[selectedState][selectedDistrict][selectedBlock]);
    }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
