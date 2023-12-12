import { Accordion } from "flowbite-react";
import dataItems from "./data";

const MenuLaws = () => {
  return (
    <Accordion>
      {dataItems.map((items) => (
        <Accordion.Panel key={items.id}>
          <Accordion.Title> {items.title}</Accordion.Title>
          {items.contents.map((item, index) => (
            <Accordion.Content>
              <ul
                key={index}
                className="list-none pl-5 text-gray-500 dark:text-gray-400"
              >
                <li>
                  <a
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                    href={`#${item.name}`}
                  >
                    <p>{item.content}</p>
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          ))}
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default MenuLaws;
