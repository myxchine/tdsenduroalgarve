"use client";
import { ArcherContainer, ArcherElement } from "react-archer";
import { map } from "./data";

export default function Strategy() {
  return (
    <div className="flex flex-col mt-32 w-full mb-12 max-w-8xl mx-auto px-4">
      <ArcherContainer strokeColor="black">
        <div className="flex flex-col gap-8 justify-center items-center w-full">
          {map.map((item, parentIndex) => (
            <div
              key={parentIndex}
              className="flex flex-col gap-2 justify-center items-center w-full"
            >
              <ArcherElement
                id={`parent-${parentIndex}`}
                relations={item.children.map((child, childIndex) => ({
                  targetId: `child-${parentIndex}-${childIndex}`,
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                }))}
              >
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                  <h2 className="text-xl font-tds">{item.name}</h2>
                  <div className="flex flex-col gap-2 border p-2 rounded-md px-4">
                    <p className="text-center text-black/60 text-sm">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.components.map((component, componentIndex) => (
                        <div
                          key={componentIndex}
                          className="bg-black/5 rounded-md p-2 px-4 text-sm text-center"
                        >
                          <h3>{component.name}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ArcherElement>

              <div className="flex flex-row gap-8 py-8 pt-32 items-start text-center">
                {item.children.map((child, childIndex) => {
                  const relations = [];
                  if (
                    child.name === "Tours Page" ||
                    child.name === "Rentals Page"
                  ) {
                    const reservationIndex = item.children.findIndex(
                      (child) => child.name === "Reservation Page"
                    );
                    if (reservationIndex !== -1) {
                      relations.push({
                        targetId: `child-${parentIndex}-${reservationIndex}`,
                        targetAnchor: "bottom",
                        sourceAnchor: "bottom",
                      });
                    }
                  }

                  return (
                    <ArcherElement
                      key={childIndex}
                      id={`child-${parentIndex}-${childIndex}`}
                      relations={relations}
                    >
                      <div className="w-full flex flex-col gap-2">
                        <h3 className="text-xl font-tds">{child.name}</h3>
                        <div className="flex flex-col gap-2 border p-2 rounded-md">
                          <p className="text-center text-black/60 text-sm">
                            {child.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {child.components.map(
                              (component, componentIndex) => (
                                <div
                                  key={componentIndex}
                                  className="bg-black/5 rounded-md p-2 px-4 text-sm text-center"
                                >
                                  <h4>{component.name}</h4>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </ArcherElement>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
}
