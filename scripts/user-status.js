(() => {
  const tableCells = Array.from(document.querySelectorAll("td"));
  const activeStatus = tableCells.filter(
    (td) => td.textContent.trim().toLowerCase() === "active"
  );
  const inactiveStatus = tableCells.filter(
    (td) => td.textContent.trim().toLowerCase() === "inactive"
  );

  activeStatus.forEach((td) => {
    td.classList.add("text-success");
  });

  inactiveStatus.forEach((td) => {
    td.classList.add("text-secondary");
  });
})();
