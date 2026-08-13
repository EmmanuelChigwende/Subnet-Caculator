# Subnet Calculator

A simple React app that calculates IPv4 subnet details from an IP address and CIDR prefix length. Built as a hands-on way to practice both React and the subnetting concepts covered in CCNA study (magic number method, host ranges).

## What it does

Enter an IP address and a prefix length (e.g. `192.168.1.0` / `24`) and get back:

- Network address
- Broadcast address
- Subnet mask
- First usable host
- Last usable host
- Total usable hosts

## Why

Manual subnetting (the magic number method) is something I've been practicing for CCNA. Building this was a way to re-derive that logic in code rather than on paper, and to get back into the habit of shipping small React projects after time away from JavaScript.

## How it works

The core logic converts IP addresses to 32-bit integers and back, then uses bitwise operations to derive the subnet mask, network address, and broadcast address:

- `ipToInt` / `intToIp` — convert between dotted-decimal IP strings and a single 32-bit number
- `calculateSubnet` — builds the subnet mask from the prefix length, then uses `&`, `|`, and `~` to derive the network address, broadcast address, and host range

This mirrors the magic number method by hand, just expressed as bit shifting instead of a manual block-size table.

## Edge cases handled

- Invalid IP addresses (wrong number of octets, out-of-range numbers)
- Invalid prefix lengths (must be 0–32)
- `/31` and `/32` networks, which have no traditional usable host range

## Tech stack

- React (functional component, `useState`)
- Tailwind CSS for styling

## Possible next steps

- VLSM support — split a block into multiple subnets of different sizes
- Binary representation view (show the mask/address in binary, not just decimal)
- Save/compare multiple subnet calculations at once

## Status

v1 — single subnet calculation only. Built as a first project to get back into React after time away from coding.
