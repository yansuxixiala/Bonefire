<?php

namespace App\Http\Controllers;

use App\Models\OnlineOrders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = OnlineOrders::all();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'date' => 'required',
            'time' => 'required',
            'partySize' => 'required',
        ]);

        $order = new OnlineOrders();
        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->email = $request->email;
        $order->date = $request->date;
        $order->time = $request->time;
        $order->partySize = $request->partySize;
        $order->save();

        return response()->json(['message' => 'Order created successfully']);
    }

    public function show($id)
    {
        $order = OnlineOrders::findOrFail($id);
        return response()->json($order);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'date' => 'required',
            'time' => 'required',
            'partySize' => 'required',
        ]);

        $order = OnlineOrders::findOrFail($id);
        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->email = $request->email;
        $order->date = $request->date;
        $order->time = $request->time;
        $order->partySize = $request->partySize;
        $order->save();

        return response()->json(['message' => 'Order updated successfully']);
    }

    public function destroy($id)
    {
        $order = OnlineOrders::findOrFail($id);
        $order->delete();

        return response()->json(['message' => 'Order deleted successfully']);
    }

    public function search(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $orders = OnlineOrders::where('name', $request->name)->get();
        return response()->json($orders);
    }
}
