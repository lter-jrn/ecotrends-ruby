require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get glossary" do
    get :glossary
    assert_response :success
  end

  test "should get infographics" do
    get :infographics
    assert_response :success
  end

  test "should get datastore" do
    get :datastore
    assert_response :success
  end

end
