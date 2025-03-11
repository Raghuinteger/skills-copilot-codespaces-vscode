public printname(string name)
{
    Console.WriteLine("Hello " + name);
}
using UnityEngine;
using System.Collections;

public class RotateCamera : MonoBehaviour
{
    public float rotationSpeed = 10f;

    void Update()
    {
        if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.DownArrow))
        {
            StopAllCoroutines();
            StartCoroutine(Rotate());
        }
    }

    IEnumerator Rotate()
    {
        while (true)
        {
            float horizontalInput = Input.GetAxis("Horizontal");
            float verticalInput = Input.GetAxis("Vertical");

            transform.Rotate(Vector3.up, horizontalInput * rotationSpeed * Time.deltaTime);
            transform.Rotate(Vector3.right, verticalInput * rotationSpeed * Time.deltaTime);

            yield return null;
        }
    }
}