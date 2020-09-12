require 'test_helper'

class HelloControllerTest < ActionDispatch::IntegrationTest
  test "should get api route" do
    get api_people_url, xhr: true

    assert_response :success
    assert_equal "application/json", @response.media_type

    json = JSON.parse @response.body
    assert_match "Nolan", @response.body
    assert_match "Hitchcock", @response.body
    assert_equal "Array", json.class.name
    assert_equal 2, json.length
    assert json.is_a?(Array)
  end
end
