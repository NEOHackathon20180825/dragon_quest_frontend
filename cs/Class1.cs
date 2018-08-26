using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using System.Numerics;
using System;

namespace Neo.SmartContract
{
    public class Class1 : Framework.SmartContract
    {
        public static string Name() => "Test";
        public const ulong total_amount = 100;

        public static Object Main(string operation, params object[] args)
        {
            if (operation == "name") return Name();
            if (operation == "setString") return SetString((string)args[0]);
            if (operation == "setNum") return SetNum((ulong)args[0]);
            if (operation == "getString") return GetString();
            if (operation == "getNum") return GetNum();
            if (operation == "bool") return true;
            if (operation == "totalSupply") return TotalSupply();
            return NotifyErrorAndReturnFalse("operation not found");
        }

        public static bool SetString(string value)
        {
            Storage.Put(Storage.CurrentContext, "valueString", value);
            return true;
        }

        public static bool SetNum(ulong value)
        {
            Storage.Put(Storage.CurrentContext, "valueNum", value);
            return true;
        }

        public static string GetString()
        {
            return Storage.Get(Storage.CurrentContext, "valueString").AsString();
        }

        public static BigInteger GetNum()
        {
            return Storage.Get(Storage.CurrentContext, "valueNum").AsBigInteger();
        }

        public static BigInteger TotalSupply()
        {
            return Storage.Get(Storage.CurrentContext, "totalSupply").AsBigInteger();
        }

        public static bool Deploy()
        {
            Storage.Put(Storage.CurrentContext, "totalSupply", total_amount);
            return true;
        }

        public static bool NotifyErrorAndReturnFalse(string value)
        {
            Runtime.Notify(value);
            return false;
        }
    }
}