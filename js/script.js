document.addEventListener("DOMContentLoaded", function () {
  let companySelect = document.querySelector('.company');
  let positionSelect = document.querySelector('.position');
  let tableBody = document.querySelector('.table-body');
  let form = document.querySelector('.form');
  let companyOptions = [
    { name: 'Fouro', positions: ["Укажите должность", "Frontend-разработчик", "Backend-разработчик", "Дизайнер"] },
    { name: 'ООО "Рога и копыта"', positions: ["Укажите должность", "Гл.Директор", "Менеджер", "Бухгалтер"] },
    { name: 'ИП "Иванов Иван Иванович"', positions: ["Укажите должность", "Тестировщик", "Системный аналитик", "Архитектор ПО"] },
  ];

  companyOptions.forEach((company) => {
    let option = document.createElement("option");
    option.value = company.name;
    option.text = company.name;
    companySelect.add(option);
  });

  companySelect.addEventListener("change", () => {
    let selectedCompany = companySelect.value;
    let selectedCompanyPositions = companyOptions.find((company) => company.name === selectedCompany).positions;

    positionSelect.innerHTML = "";
    
    selectedCompanyPositions.forEach((position) => {
      const option = document.createElement("option");
      option.value = position;
      option.text = position;
      positionSelect.add(option);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let newRow = document.createElement("tr");
    let idCell = document.createElement("td");

    idCell.textContent = tableBody.children.length + 1;
    newRow.appendChild(idCell);

    for (let value of formData.values()) {
      let dataCell = document.createElement("td");
      dataCell.textContent = value;
      newRow.appendChild(dataCell);
    }

    tableBody.appendChild(newRow);

    form.reset();
  });
});
