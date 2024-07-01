import View from "./View.js";

class SidebarView extends View {
  _parent = document.querySelector(".main__navigation__list");

  _selectedId;

  _svgs = {
    inbox: `<svg class="icon icon--small icon--inbox w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clip-rule="evenodd"/>
                </svg>`,
    today: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                </svg>`,
    personal: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--house" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                    </svg>`,
    work: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon--small" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                </svg>`,
    hobbies: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--heart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                    </svg>`,
    other: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--heart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    </svg>`,
  };

  _generateMarkup() {
    return `
            <div data-id="-1" class="main__navigation--item ${this._selectedId === -1 ? 'selected' : ''}">
                ${this._svgs.inbox}
                Inbox
            </div>
            <div data-id="-2" class="main__navigation--item ${this._selectedId === -2 ? 'selected' : ''}">
                ${this._svgs.today}
                Today
            </div>
            ${this._data
              .map(
                (cat) =>
                  `<div data-id=${cat.id} class="main__navigation--item ${this._selectedId === cat.id ? 'selected' : ''}">
                        ${this._svgs[cat.name.toLowerCase()] ?? this._svgs.other}
                        ${cat.name}
                    </div>
                    ${
                      cat.children
                        ? cat.children
                            .map(
                              (c) =>
                                `<div data-id=${
                                  c.id
                                } class="main__navigation--item main__navigation--sub-item ${this._selectedId === c.id ? 'selected' : ''}">
                                ${
                                  this._svgs[c.name.toLowerCase()] ??
                                  this._svgs.other
                                }
                            ${c.name}
                            </div>`
                            )
                            .join("")
                        : ""
                    }
                    `
              )
              .join("")}
        `;
  }

  addHandlerCategorySelected(handler) {
    this._parent.addEventListener("click", (e) => {
      const targetElement = e.target;
      if(targetElement.classList.contains('main__navigation--item'))
        handler(targetElement.dataset.id);
    });
  }

  setSelectedId(id) {
    this._selectedId = id;
    // console.log(this._selectedId);
  }
}

export default new SidebarView();
