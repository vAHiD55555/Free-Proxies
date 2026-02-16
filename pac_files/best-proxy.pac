function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 147.75.34.105:443",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 15.235.133.171:8080",
        "SOCKS 123.54.197.21:20242",
        "SOCKS 163.5.128.116:14270",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 78.135.105.217:50504",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}