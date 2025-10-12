function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 66.70.235.23:5454",
        "SOCKS 93.91.112.247:41258",
        "SOCKS 43.224.116.218:19201",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 2.186.116.14:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 91.218.244.153:8989",
        "SOCKS 179.48.80.9:8085",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 145.40.96.156:9401",
        "SOCKS 209.141.57.216:80",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 77.221.134.220:3128",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 91.219.101.244:3128",
        "SOCKS 103.70.79.3:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}