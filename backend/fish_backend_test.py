import requests
import json


class FishFinderTest:
    def __init__(self, url='http://localhost:8080/'):
        self.url = url

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

        print("\n          /fish_query Test           \n")

        # Using the requests library, send a POST request with the following
        # message to the URL.
        response = requests.post(url=endpoint,
                                 json=json_message)

        # Extract the status code and returned text
        status_code = response.status_code
        response_body = response.text

        if status_code == 200:
            print("Test Passed!")
            # print(f"response: {response_body}\n")
        else:
            print(f"Test Failed with {status_code} status code.")
            print(f"response: {response_body}\n")

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
    req_fish_list = list(req_fish_json["NAME"].values())

    # print(list(all_fish["NAME"].values()),"\n")
    print(len(req_fish_list), " fish found! \n")
    
    for fish in req_fish_list:
        print(fish)