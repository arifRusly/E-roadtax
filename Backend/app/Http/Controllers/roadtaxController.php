<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Roadtax;
use Auth;
use Validator;


class roadtaxController extends Controller
{

    protected $user;

    public function __construct(){
        
        $this->middleware("auth:api");
        $this->user = new Roadtax;
                
    }

    public function roadtax(Request $request)
    {

        $user = Auth::guard("api")->user();
        $user = new Roadtax();

        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string',
            'nric' => 'required|string',
            'platnumber' => 'required|string',
            'postalcode' => 'required|string',
            'phone' => 'required|string',
            'grant' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ],500);
        }

        
        

        $user->user_id = auth()->user()->id;
        $user->fullname = $request->fullname;
        $user->nric = $request->nric;
        $user->platnumber = $request->platnumber;
        $user->postalcode = $request->postalcode;
        $user->phone = $request->phone;
        $user->grant = $request->grant;
        //$user->grant = $request->file('grant')->store('grants');

        $user->save();

        $responseMessage = "Your Application has been submitted";

        return response()->json([
            'success'=> true,
            'message'=> $responseMessage
        ],200);
    }


    public function viewRoadtaxAll()
    {
        $all = RoadTax::all();
        return $all;
    }



    public function viewRoadtax()
    {
        $responseMessage = "user Roadtax Applications";

        $data = Auth::user()->roadtax()->get();
        
        return response()->json([
            "success" => true,
            "message" => $responseMessage,
            "data" => $data
        ], 200);

    }
}
