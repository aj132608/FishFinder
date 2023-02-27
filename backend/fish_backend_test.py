import requests
import json


class FishFinderTest:
    def __init__(self, url='http://localhost:8080/'):
        self.url = url

    @staticmethod
    def compare_vals(expected, actual):
        for key in expected.keys():
            if expected[key] == actual[key]:
                print(f'{key} was equal to {actual[key]} as expected.\n')
            else:
                print(f'Actual value of {key}: {actual[key]}')
                print(f'Expected value of {key}: {expected[key]}\n')
        

    def get_all_fish_test(self):
        endpoint = self.url+'get_all_fish'
        
        print("\n          /get_all_fish Test           \n")

        response = requests.get(url=endpoint)

        status_code = response.status_code
        response_body = response.text

        print(f'Status Code: {status_code}\n')
        print(f'Response: {response_body}')

        return response_body

    def fish_query_test(self, season, weather):
        # Construct the URL and message to send to the microservice
        endpoint = self.url+'fish_query'
        json_message = {
            "season": season,
            "weather": weather
        }
        test_val = {
            'NAME': "Ghostfish",
            "DESCRIPTION": "A pale, blind fish found in underground lakes.",
            "LOCATION": "Mines (20, 60), Ghost Drops",
            "TIME": "Anytime"
        }

        print("\n          /fish_query Test           \n")

        print(f"Request: {json_message}\n")

        # Using the requests library, send a POST request with the following
        # message to the URL.
        response = requests.post(url=endpoint,
                                 json=json_message)

        # Extract the status code and returned text
        status_code = response.status_code
        response_body = response.text
        response_body_dict = json.loads(response_body)

        if status_code == 200:
            print("Test Passed!")
            print(f"response: {response_body}\n")

            # Test validity of response
            # test_val_index = response_body_dict["NAME"].index(test_val["NAME"])
            # actual_val = {}

            # for key in response_body_dict.keys():
            #     actual_val[key] = response_body_dict[key][test_val_index]

            # FishFinderTest.compare_vals(expected=test_val, actual=actual_val)

        else:
            print(f"Test Failed with {status_code} status code.")
            # print(f"response: {response_body}\n")

        try:
            id_dict = json.loads(response_body)
            return id_dict
        except ValueError:
            return [response_body]
        except Exception as e:
            return f"Unexpected data type: {type(response_body)} with Exception: {e}"


if __name__ == "__main__":
    test_obj = FishFinderTest()
    
    # all_fish = test_obj.get_all_fish_test()
    req_fish_json = test_obj.fish_query_test("FALL", "RAIN")