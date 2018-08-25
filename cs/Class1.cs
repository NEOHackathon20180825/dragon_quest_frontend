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
            if (operation == "bool") return true;
            if (operation == "totalSupply") return TotalSupply();
            return NotifyErrorAndReturnFalse("operation not found");
        }

        public static bool Deploy()
        {
            Storage.Put(Storage.CurrentContext, "totalSupply", total_amount);
            return true;
        }

        public static BigInteger TotalSupply()
        {
            return Storage.Get(Storage.CurrentContext, "totalSupply").AsBigInteger();
        }

        public static bool NotifyErrorAndReturnFalse(string value)
        {
            Runtime.Notify(value);
            return false;
        }
    }
}