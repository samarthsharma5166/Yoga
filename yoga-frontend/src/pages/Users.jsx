import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getAllUsersFromDb } from "../services/api";

const Users = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUser() {
    setLoading(true);
    const res = await getAllUsersFromDb();
    setUser(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="w-full p-4 ">
      <Typography variant="h4" align="center" gutterBottom>
        Users
      </Typography>

      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow > 
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>id</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Referral Code</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Referred By</TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor:"#e0e0e0" }}>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((u, idx) => (
              <TableRow key={u.id || idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{u.name || "—"}</TableCell>
                <TableCell>{u.email || "—"}</TableCell>
                <TableCell>{u.role || "—"}</TableCell>
                <TableCell>{u.referral_code || "—"}</TableCell>
                <TableCell>{u.referred_by || "—"}</TableCell>
                <TableCell>{u.number || "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
