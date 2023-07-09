const saveSelectionToLocalhost = (data) => {
    localStorage.setItem('selection', JSON.stringify(data));
};

const loadSelectionFromLocalhost = () => {
    const data = localStorage.getItem('selection') || '[]';
    return JSON.parse(data);
};


export { 
  saveSelectionToLocalhost,
  loadSelectionFromLocalhost,
};