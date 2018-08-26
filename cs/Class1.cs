using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using System.Numerics;
using System;

namespace Neo.SmartContract
{
    public class Class1 : Framework.SmartContract
    {
        public const ulong value = 0;

        public static BigInteger Main(string operation)
        {
            if (operation == "set") {
                BigInteger like = 1;
                BigInteger newValue = Storage.Get(Storage.CurrentContext, "like").AsBigInteger() + like;
                Storage.Put(Storage.CurrentContext, "like", newValue);
                return value;
            }

            if (operation == "get")
            {
                return Storage.Get(Storage.CurrentContext, "like").AsBigInteger();
            }

            return value;
        }

    }
}