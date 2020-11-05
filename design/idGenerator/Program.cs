using System;
using IdGen;
using Unified;

namespace idGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            string randomIdGen()
            {
                string id = UnifiedId.NewId();
                return id;
            }

            int maxLines = 50;

            string[] randomIds = new string[50];

            for (int i = 0; i < maxLines; i++)
            {
                string newId = randomIdGen();

                randomIds[i] = newId;

            }

            System.IO.File.WriteAllLines(@"C:\Users\Cameron\Documents\CodingProgramming\Projects\warehouseDBMS\backend\database\design\idGenerator\randomIds.txt", randomIds);

        }
    }
}
