"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface GlobalStateContextType {
	state: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
	undefined,
);

interface GlobalStateProviderProps {
	children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
	children,
}) => {
	const [state, setState] = useState<string>("home");

	return (
		<GlobalStateContext.Provider value={{ state, setState }}>
			{children}
		</GlobalStateContext.Provider>
	);
};
export const useGlobalState = (): GlobalStateContextType => {
	const context = useContext(GlobalStateContext);
	if (context === undefined) {
		throw new Error("useGlobalState must be used within a GlobalStateProvider");
	}
	return context;
};
