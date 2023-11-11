import { render, screen } from "@testing-library/react";
import UserList from "../Components/UserList";

describe("UserList", () => {
    test("renders 'No users found.' when users prop is empty", () => {
        render(<UserList users={[]} />);
        const noUsersElement = screen.getByText(/no users found/i);
        expect(noUsersElement).toBeInTheDocument();
    });

    test("renders a table with user data when users prop is not empty", () => {
        const users = [
            {
                id: 1,
                name: "John Doe",
                email: "johndoe@example.com",
                phone: "1234567890",
                company: { name: "Acme Inc." },
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "janesmith@example.com",
                phone: "0987654321",
                company: { name: "Widgets LLC" },
            },
        ];
        render(<UserList users={users} />);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();

        const idHeader = screen.getByText(/id/i);
        expect(idHeader).toBeInTheDocument();

        const nameHeader = screen.getByText(/name/i);
        expect(nameHeader).toBeInTheDocument();

        const emailHeader = screen.getByText(/email/i);
        expect(emailHeader).toBeInTheDocument();

        const phoneHeader = screen.getByText(/phone/i);
        expect(phoneHeader).toBeInTheDocument();

        const companyHeader = screen.getByText(/company/i);
        expect(companyHeader).toBeInTheDocument();

        const johnDoeRow = screen.getByText(/john doe/i);
        expect(johnDoeRow).toBeInTheDocument();
        expect(johnDoeRow).toContainElement(screen.getByText("1"));
        expect(johnDoeRow).toContainElement(screen.getByText("johndoe@example.com"));
        expect(johnDoeRow).toContainElement(screen.getByText("1234567890"));
        expect(johnDoeRow).toContainElement(screen.getByText("Acme Inc."));

        const janeSmithRow = screen.getByText(/jane smith/i);
        expect(janeSmithRow).toBeInTheDocument();
        expect(janeSmithRow).toContainElement(screen.getByText("2"));
        expect(janeSmithRow).toContainElement(screen.getByText("janesmith@example.com"));
        expect(janeSmithRow).toContainElement(screen.getByText("0987654321"));
        expect(janeSmithRow).toContainElement(screen.getByText("Widgets LLC"));
    });
});


    