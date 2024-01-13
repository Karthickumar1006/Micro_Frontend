package com.micro_frontend.MicroConnectingModule;

import android.os.Bundle;
import android.util.Log;

import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import java.util.ArrayList;
import java.util.Arrays;

public class SuperAppActivity extends ReactActivity implements DefaultHardwareBackBtnHandler {
    private static SuperAppActivity mInstance;
    private String mMainComponentName;
    private static ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mInstance = this;
        Log.d("Testin","Testingssssss");
        Bundle bundle = getIntent().getExtras();
        assert bundle !=null;
        mMainComponentName  = bundle.getString("bundleName","");
        boolean devLoad = bundle.getBoolean("devLoad");
        Bundle initProps = bundle.getBundle("initProps");
        ReactRootView mReactRootView = new ReactRootView(this);
        String appPath = bundle.getString("appPath","");

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setJavaScriptExecutorFactory(new HermesExecutorFactory())
                .setCurrentActivity(this)
                .setBundleAssetName(appPath)
                .setJSMainModulePath("index")
                .addPackages(getPackages())
                .setUseDeveloperSupport(devLoad)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, mMainComponentName, initProps);
        setContentView(mReactRootView);
                }

    public ArrayList<ReactPackage> getPackages() {
        return new ArrayList<>(Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new ConnectNativePackage()
        ));
    }

    @Override
    protected String getMainComponentName() {
        return mMainComponentName;
    }

    public static void close(){
        if (mInstance != null) mInstance.finish();
        mInstance = null;
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

}
